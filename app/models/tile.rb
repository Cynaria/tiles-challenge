class Tile
  include Mongoid::Document
  field :string, type: String
  embeds_many :tile_clicks
end
