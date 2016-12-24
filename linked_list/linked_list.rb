require 'byebug'
class LinkedList

  attr_accessor :head

  def initialize(node)
    @head = node
  end

  def find(val)
    current = head
    return current if val == current.value
    while current.value != val
      current = current.next
    end
    return current
  end

  #jim, ed, nancy
  def add(val)
    
  end

  def delete(val)
    # edge case deleting head
    return head.delete if val == head.value

    current = head.next
    previous = head

    while current.next != nil
      if current.value == val
        previous.next = current.next
        current = nil
        break;
      end
      previous = current
      current = current.next
    end
  end
  
  # a, b, c, a

  def contains_cycle_via_array_storage # O(n) time O(n) space
    current = head
    prevs = []
    cycle = false
    while current.next != nil
      prevs.each do |prev| 
        cycle = true if prev == current.next
      end
      break if cycle == true
      prevs.push(current)
      current = current.next
    end
    cycle
  end

  def contains_cycle_via_runners # O(n) time O(1) space
    slow_runner = head
    fast_runner = head
    cycle = false
    while fast_runner != nil && fast_runner.next != nil
      slow_runner = slow_runner.next
      fast_runner = fast_runner.next.next

      if fast_runner == slow_runner
        cycle = true
        break
      end
    end
    return cycle
  end
end

class LinkedListNode

  attr_accessor :value, :next, :previous

  def initialize(value)
    @value = value
    @next = nil
  end
end
