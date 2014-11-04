class TileClick
  include Mongoid::Document
  include Mongoid::Timestamps
  
  field :timestamp, type: String

  embedded_in :tile
end
