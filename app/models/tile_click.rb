class TileClick
  include Mongoid::Document
  field :timestamp, type: DateTime
  embedded_in :tile
end
