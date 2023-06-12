interface Bird {
  eat(): void;
}

interface FlyingBird {
  fly(): void;
}

interface RunningBird {
  run(): void;
}

class Tucan implements Bird, FlyingBird {
  public eat() {}
  public fly() {}
}

class Humminbird implements Bird, FlyingBird {
  public eat() {}
  public fly() {}
}

class Penguin implements Bird, RunningBird {
  public eat() {}
  public run() {}
}
