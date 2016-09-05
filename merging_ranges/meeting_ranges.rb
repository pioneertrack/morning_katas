require 'byebug'
require 'awesome_print'
# Write a function condense_meeting_times() that takes an array of meeting time ranges and returns an array of condensed ranges

class MeetingRanges

  attr_reader :meeting_ranges

  def initialize(meeting_times_array)
    @meeting_ranges = meeting_times_array
  end
  #SORT
  def sort_meeting_ranges
    for outer_index in 0...meeting_ranges.length
      min_index = outer_index
      for inner_index in outer_index+1...meeting_ranges.length
        if meeting_ranges[inner_index][0] < meeting_ranges[min_index][0]
          min_index = inner_index
        end
      end
      meeting_ranges[outer_index], meeting_ranges[min_index] = meeting_ranges[min_index], meeting_ranges[outer_index]
    end
    meeting_ranges
  end

  def condense_meeting_ranges
    
    # sort ranges so we know that meetings that can be merged are adjacent
    # no non-next ranges that could be merged
    sorted_meeting_ranges = sort_meeting_ranges
    condensed_meeting_ranges = []
    condensed_meeting_range = sorted_meeting_ranges[0]
    merged = false
    
    sorted_meeting_ranges.each_with_index do |current_range, index|
      # skip if out of range
      next if sorted_meeting_ranges[index + 1].nil?
      # skip if on the last pass we merged current with next
      if merged == true
        merged = false
        next
      end
      # set next range
      next_range = sorted_meeting_ranges[index + 1]

      # if overlap (end time of first is after start of next) merge
      # use min and max to grab the range bounds
      if current_range[-1] >= next_range[0] 
        min_start = [current_range[0], next_range[0]].min
        max_end = [current_range[-1], next_range[-1]].max
        condensed_meeting_ranges << [min_start, max_end]
        # flag as merged
        merged = true
      else
        # otherwise just use current range
        puts "Condensed range is #{current_range}"
        condensed_meeting_ranges << current_range
      end
    end
    condensed_meeting_ranges
  end
end