class ClickWorker
	include Sidekiq::Worker

	def perform
		@tile_click = TileClick.new(tile_clicks_params)
	end

end