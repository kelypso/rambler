class Api::V1::EntriesController < ApplicationController
    before_action :set_entry, only: [:show, :update, :destroy] #, :authenticate_user!

    # GET /entries
    def index
        @entries = Entry.all
        render json: @entries
    end

    # GET /entries/1
    def show
        render json: @entry
    end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_entry
        @entry = Entry.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def entry_params
        params.require(:entry).permit(:date, :location, :meals, :activities, :encounters, :lowlight, :delight, :highlight, :objectives, :photo)
    end

end
