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
        entry_json = EntrySerializer.new(@entry)
        render json: entry_json
    end

    #POST /entries 
    def create
        @entry = current_user.entries.build(entry_params)
        if @entry.save 
            render json: EntrySerializer.new(@entry), status: :created
        else
            resp = {
                error: @entry.errors.full_messages.to_sentence
            }
            render json: resp, status: :unprocessable_entity
        end
    end

    # PATCH/PUT /entries/1
    def update
        if @entry.update(entry_params)
            render json:  EntrySerializer.new(@entry), status: :ok
        else
            resp = {
                error: @entry.errors.full_messages.to_sentence
            }
            render json: resp, status: :unprocessable_entity
        end
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
