class ClickWorker
	include Sidekiq::Worker
	include Sidekiq::Status::Worker

	sidekiq_options :retry => false

		sidekiq_retries_exhausted do |msg|
			render status: :internal_server_error
	  end

	def perform(params)
			random_error
			tile = Tile.find(params["id"])

			tile_click = tile.tile_clicks.create(timestamp: params["timestamp"])
	end



	# only here for random error creation
	def random_error
		if rand(50) % 5 == 0
			raise Exeption.new('Random Error!')
		end
	end

end