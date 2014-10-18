class TileClick
  include Mongoid::Document
  include Mongoid::Timestamps
  
  embedded_in :tile
end
