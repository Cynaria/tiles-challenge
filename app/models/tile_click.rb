class TileClick
  include Mongoid::Document
  include Mongoid::Timestamps
  
  field :timestamps, type: String

  embedded_in :tile
end
