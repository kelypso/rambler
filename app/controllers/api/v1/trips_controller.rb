class Api::V1::TripsController < ApplicationController

    # GET /trips
    def index
        @trips = Trip.all
        render json: @trips
    end

    # GET /trips/1
    def show
        render json: @trip
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
