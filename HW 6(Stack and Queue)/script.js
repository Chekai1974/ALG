function isSymmetricLinkedList(head) {
    // если список пуст, то он симметричный
    if (!head) return true;
    let slow = head;
    let fast = head;
    const queue = [];
    const stack = [];

    while (fast && fast.next) {
        queue.push(slow.val);
        stack.push(slow.val);
        slow = slow.next;
        fast = fast.next.next;
    }

    // если количество элементов списка нечетное, пропускаем серединный элемент
    if (fast) slow = slow.next; 
    while (slow) {
        if (slow.val !== stack.pop() || slow.val !== queue.shift()) {
            return false;
        }
        slow = slow.next;
    }

    return true;
}