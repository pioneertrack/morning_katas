require './array.rb'

describe '#find_rotation_index' do
  words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'vectors',
    'apples',
    'asymptote', # <-- rotates here!
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
  ]

  more_words = ['yellow', 'apples', 'bundles', 'canopes', 'didgeridoos', 'elbows']
  even_more_words = ['zebras', 'apples', 'bats', 'cats']

  it 'should find the rotation point in an alphabetized, rotated array' do
    expect(words.find_rotation_index_recursive_binary_search.should eq(5))
  end

  it 'should find the rotation point in an alphabetized, rotated array' do
    expect(more_words.find_rotation_index_recursive_binary_search.should eq(1))
  end

  it 'should find the rotation point in an alphabetized, rotated array' do
    expect(even_more_words.find_rotation_index_recursive_binary_search.should eq(1))
  end

  it 'should find the rotation point in an alphabetized, rotated array' do
    expect(words.find_rotation_index_iterative_binary_search.should eq(5))
  end

  it 'should find the rotation point in an alphabetized, rotated array' do
    expect(more_words.find_rotation_index_iterative_binary_search.should eq(1))
  end

  it 'should find the rotation point in an alphabetized, rotated array' do
    expect(even_more_words.find_rotation_index_iterative_binary_search.should eq(1))
  end
end