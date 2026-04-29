function solution(num_list) {
    const odd = num_list.filter(v => v % 2 === 1).join('');
    const even = num_list.filter(v => v % 2 === 0).join('');
    return Number(odd) + Number(even);
  }