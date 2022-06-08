
enum PromiseStatus {
  pending = 'pending',
  fulfilled = 'fulfilled',
  reject = 'rejected'
}


export default class CustomePromise {
  state: PromiseStatus = PromiseStatus.pending;
  private promiseLine = [];

  constructor(func) {
    return func(this.resolve.bind(this), this.reject.bind(this))
  }

  private resolve(data) {
    if (this.state = PromiseStatus.pending) {
      this.state = PromiseStatus.fulfilled
      setTimeout(() => {
        try {
          this.state = PromiseStatus.fulfilled;
          return this.thenFunc(data)
        } catch (error) {
          this.state = PromiseStatus.reject;
        }
        
      }, 0)
    }
  }

  private reject(error) {
    setTimeout(() => {
      this.state = PromiseStatus.reject;
      return this.catchFunc(error)
    }, 0)
  }

  then(onResolved?: any, onRejected?: any) {
    const promise = new CustomePromise(() => {})
    this.promiseLine.push({
      onResolved: typeof onResolved === 'function' ? onResolved : null, 
      onRejected: typeof onRejected === 'function' ? onRejected : null, 
      promise});
    return promise;
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

}

const req = new CustomePromise((resolve, reject) => {
  resolve('lol');
  reject('kek');
})

req.then((res: any) => {
  console.log(res)
  return 'second';
}).then(res => {
  console.log('second');
})
.catch((err) => {
  console.error(err)
})