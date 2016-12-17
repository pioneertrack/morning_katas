require './array.rb'

describe '#find_rotation_index' do
  words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'apples',
    'asymptote', # <-- rotates here!
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
  ]

  it 'should find the rotation point in an alphabetized, rotated array' do
    expect(words.find_rotation_index_recursive_binary_search.should eq(5))
  end

  it 'should find the rotation point in an alphabetized, rotated array' do
    expect(words.find_rotation_index_iterative_binary_search.should eq(5))
  end
end