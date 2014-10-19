class TileClicksController < ApplicationController
	require "click_worker"
	def create
		ClickWorker.perform_async(@tile_click.id)
	end

	private

	def tile_clicks_params
		params.permit(:id, :timestamps)
	end

end