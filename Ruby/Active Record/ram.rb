class Article < ApplicationRecord
  belongs_to :author
  has_many :comments

  validates :title, presence: true
end
