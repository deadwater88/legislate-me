require_relative 'ring_buffer'

# def well_formed?(str)
#   types = {
#     '{' => 0,
#     '}' => 0,
#     '[' => 0,
#     ']' => 0,
#     '(' => 0,
#     ')' => 0
#   }
#
#   str.chars.each do |el|
#     types[el] += 1
#   end
#
#   (types['{'] == types['}']) && (types['['] == types[']']) && (types['('] == types[')'])
# end

def well_formed?(str)
  store = RingBuffer.new
  opposite = {
    '{' => '}',
    '}' => '{',
    '[' => ']',
    ']' => '[',
    '(' => ')',
    ')' => '('
  }

  str.chars.each_with_index do |el, idx|
    p el
    p store

    if idx > 1 && store[idx - 1] == opposite[el]
      store.pop
    else
      store.push(el)
    end
  end

  store
end


p well_formed?('{{[]}()[]}')
p well_formed?('[}{}')
p well_formed?('[{]}')
