import CustomePromise from "./CustomePromise";

const myPromise = Promise;

describe('Base Promise functions', () => {
  it('then returned data', () => {
    return new myPromise((resolve, reject) => {
      resolve('my')
    }).then((data) => {
      expect(data).toBe('my');
    })
  })

  it('catch returned error', () => {
    return new myPromise((resolve, reject) => {
      reject('error')
    }).catch((error) => {
      expect(error).toBe('error');
    })
  })
})

describe('Chaining Promise functions', () => {
  it('simple chaining', () => {
    return new myPromise((resolve, reject) => {
      resolve('my')
    }).then((res) => {
      return res
    }).then((data) => {
      expect(data).toBe('my');
    })
  })

  it('return in then', () => {
    return new myPromise((resolve, reject) => {
      resolve('my')
    }).then((res) => {
      return 'notmy'
    }).then((data) => {
      expect(data).toBe('notmy');
    })
  })

  it('error in then', () => {
    return new myPromise((resolve, reject) => {
      resolve('error')
    }).then((res) => {
      throw new Error('error');
    }).then((res) => {
      return res
    }).catch((error) => {
      console.log(error)
      expect(error).toEqual(Error('error'));
    })
  })
})

describe('Advansed Promise functions', () => {
  it('finnally', () => {
    
  })

  it('Promise.all', () => {
    const pr1 = new Promise((resolve) => {resolve('one')});
    const pr2 = new Promise((resolve) => {resolve('two')});

    myPromise.all([pr1,pr2]).then(res => {
      expect(res).toEqual(['one', 'two']);
    })
  })

  it('Promise.race', () => {});

  it('Promise.race not be resolved', () => {});
})