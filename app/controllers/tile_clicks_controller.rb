class TileClicksController < ApplicationController
	# require "click_worker"
	def create
		@job_id = ClickWorker.perform_async(tile_clicks_params)
		render json: {job_id: @job_id}
	end

	def tile_click_status
		status = Sidekiq::Status::status(params[:job_id])
		render json: {status: status}
	end

	private

	def tile_clicks_params
		params.permit(:id, :timestamp, :job_id)
	end

end