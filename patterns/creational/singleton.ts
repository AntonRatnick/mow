class SomeService {
  private static instance: SomeService = null
  private constructor(private someField: string) {
    this.someField =  someField

  }

  public static getInstance() {
    if(!SomeService.instance) {
      SomeService.instance = new SomeService('someFieldValue')
    }

    return SomeService.instance
  }

  set some(value: string) {
    this.someField = value
  }

  get some() {
    return this.someField
  }
}

