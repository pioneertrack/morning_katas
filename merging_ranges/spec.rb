require './meeting_ranges'

describe MeetingRanges do

  describe "#sort_meeting_times" do

    it 'should sort the meeting ranges by start time for each array' do
      ranges = MeetingRanges.new([ [4, 8], [3, 5], [0, 1], [10, 12], [9, 10] ])
      expect(ranges.sort_meeting_times).to eq([[0, 1], [3, 5], [4, 8], [9, 10], [10, 12]])
    end

    it 'should have the same number of cards after shuffle' do
      ranges = MeetingRanges.new([ [4, 8], [3, 5], [0, 1], [10, 12], [9, 10] ])
      expect(ranges.meeting_times.length).to eq(5)
      expect(ranges.sort_meeting_times.length).to eq(5)
    end
  end

  describe "#condense_meeting_times" do

    it 'should merge arrays if the end time of the first array is after the start time of the second array' do
      ranges = MeetingRanges.new([ [4, 8], [3, 5] ])
      expect(ranges.condense_meeting_times).to eq([[3, 8]])
    end

    it 'should merge arrays if the end time of the first array is after the start time of the second array' do
      ranges = MeetingRanges.new(  [ [0, 1], [3, 5], [4, 8], [10, 12], [9, 10] ])
      expect(ranges.condense_meeting_times).to eq(  [ [0, 1], [3, 8], [9, 12] ])
    end

    describe "edge cases" do

      it 'should merge properly if the end time of the first meeting and the start time of the second meeting are equal' do
        ranges = MeetingRanges.new([ [1, 2], [2, 3] ])
        expect(ranges.condense_meeting_times).to eq([[1, 3]])
      end

      it 'should merge properly if the second meeting ends before the first meeting ends' do
        ranges = MeetingRanges.new([ [1, 5], [2, 3] ])
        expect(ranges.condense_meeting_times).to eq([[1, 5]])
      end

      it 'should merge properly if there are non next ranges that could be merged' do
        ranges = MeetingRanges.new([ [1, 7], [3, 5], [9, 10], [2, 4] ])
        expect(ranges.condense_meeting_times).to eq([[1, 7], [9, 10]])
      end
    
    end
  end
end