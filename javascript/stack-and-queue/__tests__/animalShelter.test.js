'use strict';

const { Animal, AnimalShelter } = require('../stack-queue-animal-shelter');

describe('Animal shelter queue', () => {
  let dog1 = new Animal('Dog1', 'dog');
  let dog2 = new Animal('Dog2', 'dog');
  let cat1 = new Animal('Cat1', 'cat');
  let cat2 = new Animal('Cat2', 'cat');
  let snake = new Animal('Snake', 'snake');

  test('Can instantiate empty queue', () => {
    let newShelter = new AnimalShelter();
    expect(newShelter).toBeTruthy();
  });
  test('Can succesfully enqueue both dogs and cats', () => {
    let newShelter = new AnimalShelter();
    newShelter.enqueue(dog1);
    newShelter.enqueue(dog2);
    newShelter.enqueue(cat1);
    newShelter.enqueue(cat2);
    expect(newShelter.dogs.front.value.name).toEqual('Dog1');
    expect(newShelter.dogs.front.next.value.name).toEqual('Dog2');
    expect(newShelter.cats.front.value.name).toEqual('Cat1');
    expect(newShelter.cats.front.next.value.name).toEqual('Cat2');
  });
  test('Enqueueing an animal that is not a dog or a cat raises an exception', () => {
    let newShelter = new AnimalShelter();
    expect(() => newShelter.enqueue(snake)).toThrow(`We don't deal with that animal`);
  });
  test('Can successfully dequeue the requested animal', () => {
    let newShelter = new AnimalShelter();
    newShelter.enqueue(dog1);
    newShelter.enqueue(dog2);
    newShelter.enqueue(cat1);
    newShelter.enqueue(cat2);
    expect(newShelter.dequeue('dog').name).toEqual('Dog1');
    expect(newShelter.dogs.front.value.name).toEqual('Dog2');
    expect(newShelter.dequeue('cat').name).toEqual('Cat1');
    expect(newShelter.cats.front.value.name).toEqual('Cat2');
  });
  test('Dequeueing an animal that is not a dog or a cat raises an exception', () => {
    let newShelter = new AnimalShelter();
    expect(() => newShelter.dequeue(snake)).toThrow(`We don't deal with that animal`);
  });
  test('Dequeueing with no argument returns the animal that has been in the queue the longest', () => {
    let newShelter = new AnimalShelter();
    const prom = new Promise(() => setTimeout(newShelter.enqueue(dog1), 10));
    prom
      .then(console.log(Date.now()))
      .then(setTimeout(newShelter.enqueue(cat1), 20))
      .then(setTimeout(newShelter.enqueue(dog2), 30))
      .then(setTimeout(newShelter.enqueue(cat2), 40))
      .then(console.log(Date.now()))
      .then(expect(newShelter.dequeue().name).toEqual('Dog1'))
      .then(expect(newShelter.dequeue().name).toEqual('Cat1'));
  });
  test('Calling dequeue on empty queue raises exception', () => {
    let newShelter = new AnimalShelter();
    expect(() => newShelter.dequeue('dog')).toThrow('Queue is empty');
  });
});
