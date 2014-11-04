class Tile
  include Mongoid::Document
  field :string, type: String
  field :click_count, type: Integer
  embeds_many :tile_clicks

  def time_clicked_avg
  	time_int = self.tile_clicks.map { |t| t.timestamp.to_i / 1000 }
  	puts Time.at(avg(time_int))
  end

  def avg(num)
  	num.reduce(:+) / num.length
  end
end
