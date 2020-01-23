class Api::V1::TripsController < ApplicationController
    before_action :set_trip, only: [:show, :update, :destroy]

    # GET /trips
    def index
        if logged_in?
            @trips = current_user.trips
            render json: TripSerializer.new(@trips)
        else 
            render json: {
                error: "Must be logged in to view trips"
            }
        end
    end

    # GET /trips/1
    def show
        trip_json = TripSerializer.new(@trip).serialized_json
        render json: trip_json
    end

    #POST /trips 
    def create
        @trip = Trip.new(trip_params)
        if @trip.save 
            render json: @trip, status: :created
        else
            render json: @trip.errors, status: :unprocessable_entity
        end
    end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_trip
        @trip = Trip.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def trip_params
        params.require(:trip).permit(:name, :category, :duration)
    end

end
