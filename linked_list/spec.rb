require './linked_list'

describe LinkedListNode do
  
  describe '#contains_cycle_via_array_storage' do
    a = LinkedListNode.new(9)
    b = LinkedListNode.new(1)
    c = LinkedListNode.new(5)
    a.next = b
    b.next = c
    list = LinkedList.new(a)
    it 'should return a boolean indicating whether a list contains a cycle' do
      expect(list.contains_cycle_via_array_storage.should eq(false))
    end
  end

  describe '#contains_cycle_via_array_storage' do
    a = LinkedListNode.new(9)
    b = LinkedListNode.new(1)
    c = LinkedListNode.new(5)
    d = LinkedListNode.new(10)
    a.next = b
    b.next = c
    c.next = d
    d.next = b
    list = LinkedList.new(a)
    it 'should return a boolean indicating whether a list contains a cycle' do
      expect(list.contains_cycle_via_array_storage.should eq(true))
    end
  end

  describe '#contains_cycle_via_runners' do
    a = LinkedListNode.new(9)
    b = LinkedListNode.new(1)
    c = LinkedListNode.new(5)
    a.next = b
    b.next = c
    list = LinkedList.new(a)
    it 'should return a boolean indicating whether a list contains a cycle' do
      expect(list.contains_cycle_via_runners.should eq(false))
    end
  end

  describe '#contains_cycle_via_runners' do
    a = LinkedListNode.new(9)
    b = LinkedListNode.new(1)
    c = LinkedListNode.new(5)
    d = LinkedListNode.new(10)
    a.next = b
    b.next = c
    c.next = d
    d.next = b
    list = LinkedList.new(a)
    it 'should return a boolean indicating whether a list contains a cycle' do
      expect(list.contains_cycle_via_runners.should eq(true))
    end
  end

  describe '#delete' do
    a = LinkedListNode.new(9)
    b = LinkedListNode.new(1)
    c = LinkedListNode.new(5)
    d = LinkedListNode.new(10)
    a.next = b
    b.next = c
    c.next = d
    d.next = b
    list = LinkedList.new(a)
    it "delete a node from a list and set previous' next pointer to deleted node's next" do
      expect(a.next).to eq(b);
      list.delete(1);
      expect(a.next).to eq(c);
    end
  end
end