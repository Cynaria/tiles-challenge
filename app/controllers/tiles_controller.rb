class TilesController < ApplicationController

	def index
		@tiles = Tile.all.sample(64).each_slice(8).to_a
		@t = Tile.desc(:click_count).limit(10)
	end

	def stats

	end

end