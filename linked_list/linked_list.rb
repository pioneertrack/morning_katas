class LinkedList

  attr_accessor :head

  def initialize(node)
    @head = node
  end

  def get(val)
    current = head
    return current if val == current.value
    while current.value != val
      current = current.next
    end
    return current
  end

  #jim, ed, nancy
  def update(val)
    # ed points to nancy
    # jill insert points to nancy
    # update ed to point to jill
    get(val)
    current.next = insert
  end

  def delete(val)
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

  attr_accessor :value, :next

  def initialize(value)
    @value = value
    @next = nil
  end
end
