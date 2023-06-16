export class Drink {
  id: number;
  name: string;
  caffeine: number;
  size: number;
  imageUrl: string;

  constructor(
    id: number = 0,
    name: string = '',
    caffeine: number = 0,
    size: number = 0,
    imageUrl: string = ''
  ){
    this.id = id;
    this.name = name;
    this.caffeine = caffeine;
    this.size = size;
    this.imageUrl = imageUrl
  }
}
