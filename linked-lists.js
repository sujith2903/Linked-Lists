const node = function (value = null, nextNode = null) {

    return {value,nextNode}
}

const linkedList = function () {

    let head = null
    let size = 0
    
    const append = function (value) {

        const newNode = node(value)

        if (head == null) {
            head = newNode
            size++ 
        } else {
            
            let tempHead = head

            while (tempHead.nextNode != null) {
                tempHead = tempHead.nextNode
            }
            tempHead.nextNode = newNode
            size++ 
        }
    }

    const prepend = function (value) {
        
        const newNode = node(value)

        if (head == null) {
            head = newNode
        } else {
            head = node(value, head)
        }
        size++ 
    }

    const getSize = function () {
        return size
    }

    const getHead = function () {
        return head
    }

    const getTail = function () {
        
        let tail = head

        while (tail.nextNode != null) {
            tail = tail.nextNode
        }
        return tail
    }

    const at = function (index) {
        
        let tempNode = head
        let i = 0

        while (i < index) {
            tempNode = tempNode.nextNode
            i++
        }

        return tempNode
    }

    const pop = function () {

        let currentNode = head
        let preNode

        while (currentNode.nextNode != null) {
            preNode = currentNode
            currentNode = currentNode.nextNode
        }

        currentNode = null
        preNode.nextNode = currentNode
        size--

        return head
    }

    const contains = function (value) {
        
        let tempHead = head
        let i = 1

        while (i <= size) {
            if (tempHead.value == value) {
                return true
            } else {
                tempHead = tempHead.nextNode
                i++
            }
        }
        return false
    }

    const find = function (value) {
        
        let index = 0
        let tempHead = head

        while (tempHead != null) {
            if (tempHead.value == value) {
                return index
            } else {
                index++
                tempHead = tempHead.nextNode
            }
        }
        return null
    }

    const toString = function () {
        
        let tempHead = head
        let string = ''

        while (tempHead != null) {
            string = string + `( ${tempHead.value} )` + ' -> '
            tempHead = tempHead.nextNode
        }
        string = string + 'null'

        return string
    }

    const insertAt = function (value, index) {

        if (index == 0) {
            prepend(value)
            return head
        }

        let preNode = at(index - 1)
        let splitNode = at(index)
        
        let newNode = node(value, splitNode)

        preNode.nextNode = newNode

        size++
        
        return preNode        
    }

    const removeAt = function (index) {
        
        if (index == 0) {
            head = head.nextNode
            size--
            return head
        }
         
        let preNode = at(index - 1)
        let splitNode = at(index)

        preNode.nextNode = splitNode.nextNode
        size--

        return preNode
    }

    return {
        append,
        prepend,
        getHead,
        getSize,
        getTail,
        at,
        pop,
        contains,
        find,
        toString,
        insertAt,
        removeAt
    }
}

let list = linkedList()

list.append(1);
list.append(5);
list.append(9);
list.append(10);
list.prepend(2);
list.toString();

