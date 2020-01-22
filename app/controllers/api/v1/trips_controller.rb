class Api::V1::TripsController < ApplicationController
    before_action :set_trip, only: [:show, :update, :destroy] #, :authenticate_user!

    # GET /trips
    def index
        @trips = Trip.all
        render json: TripSerializer.new(@trips).to_serialized_json
    end

    # GET /trips/1
    def show
        trip_json = TripSerializer.new(@trip).serialized_json
        render json: trip_json
        #render json: TripSerializer.new(@trip).to_serialized_json
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
