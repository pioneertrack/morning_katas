require './array.rb'

describe '#find_rotation_index' do
  words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'apples',
    'asymptote', # <-- rotates here!
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
  ]

  it 'should find the rotation point in an alphabetized, rotated array' do
    expect(words.find_rotation_index(0, words.length-1).should eq(5))
  end
end