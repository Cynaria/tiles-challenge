class TileClicksController < ApplicationController
	# require "click_worker"
	def create
		@job_id = ClickWorker.perform_async(tile_clicks_params)
		puts @job_id
		# render none: true
	end

	def tile_click_status
		status = Sidekiq::Status::status(params[:job_id])
		
	  status = status.present? ? status : "NotReturned"
	end

	private

	def tile_clicks_params
		params.permit(:id, :timestamp)
	end

end