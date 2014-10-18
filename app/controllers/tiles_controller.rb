class TilesController < ApplicationController

	def index
		@tiles = Tile.all.sample(64).each_slice(8)
	end

end