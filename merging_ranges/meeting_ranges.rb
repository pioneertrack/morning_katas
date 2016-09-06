require 'byebug'
require 'awesome_print'
# Write a function condense_meeting_times() that takes an array of meeting time ranges and returns an array of condensed ranges

class MeetingRanges

  attr_reader :meeting_times

  def initialize(meeting_times_array)
    @meeting_times = meeting_times_array
  end
  #SORT
  def sort_meeting_times
    for outer_index in 0...meeting_times.length
      min_index = outer_index
      for inner_index in outer_index+1...meeting_times.length
        if meeting_times[inner_index][0] < meeting_times[min_index][0]
          min_index = inner_index
        end
      end
      meeting_times[outer_index], meeting_times[min_index] = meeting_times[min_index], meeting_times[outer_index]
    end
    meeting_times
  end

  # def condense_meeting_times
  #   # sort ranges so we know that meetings that can be merged are adjacent
  #   # no non-next ranges that could be merged
  #   sorted_meetings = sort_meeting_times
  #   merged_meetings = [sort_meeting_times[0]]
    
  #   sorted_meetings[1..-1].each_with_index do |current_meeting, index|

  #     # if current meeting start is less then or equal to last merged meeting end
  #     # merge; use current start time, latest end time
  #     if current_meeting[0] <= merged_meetings[-1][-1] 
  #       latest_end_time = [merged_meetings[-1][-1], current_meeting[-1]].max
  #       merged_meetings[-1] = [merged_meetings[-1][0], latest_end_time]
  #     else
  #       # otherwise add current meeting as condensed range
  #       merged_meetings << current_meeting
  #     end
  #   end
  #   merged_meetings
  # end

  def condense_meeting_times
    
    # sort ranges so we know that meetings that can be merged are adjacent
    # no non-next ranges that could be merged
    sorted_meetings = sort_meeting_times
    merged_meetings = [sorted_meetings[0]]
    merged = false
    
    sorted_meetings[1..-1].each do |current_meeting_start, current_meeting_end|
      debugger
      last_merged_meeting_start, last_merged_meeting_end = merged_meetings[-1]
      debugger

      # if current and last meetings overlap, use latest end time
      if current_meeting_start <= last_merged_meeting_end
        merged_meetings[-1] = [last_merged_meeting_start, [current_meeting_end, last_merged_meeting_end].max]
      else
        # otherwise add the current meeting
        merged_meetings << [current_meeting_start, current_meeting_end]
      end
    end
    merged_meetings
  end
end