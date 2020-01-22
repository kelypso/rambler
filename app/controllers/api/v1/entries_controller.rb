class Api::V1::EntriesController < ApplicationController
    before_action :set_entry, only: [:show, :update, :destroy]

    # GET /entries
    def index
        if logged_in?
            @entries = current_user.entries
            render json: @entries
        else 
            render json: {
                error: "Must be logged in to view entries"
            }
        end
    end

    # GET /entries/1
    def show
        entry_json = EntrySerializer.new(@entry).serialized_json
        render json: entry_json
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
