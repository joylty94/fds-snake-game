import { ROWS, COLS } from './config';

function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열
  this.joints = [{ x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }];

  // 먹이의 좌표
  this.fruit = { x: 3, y: 5 };

  this.direction = 'right';
}

SnakeGameLogic.prototype.up = function() {
  // 위쪽 화살표 키를 누르면 실행되는
  console.log('up');
  this.direction = 'up';
}
SnakeGameLogic.prototype.down = function() {
  // 아래쪽 화살표 키를 누르면 실행되는
  console.log('down');
  this.direction = 'down';

}
SnakeGameLogic.prototype.left = function() {
  // 왼쪽 화살표 키를 누르면 실행되는
  console.log('left');
  this.direction = 'left';

}

SnakeGameLogic.prototype.right = function() {
  // 오른쪽 화살표 키를 누르면 실행되는
  console.log('right');
  this.direction = 'right';

}


SnakeGameLogic.prototype.nextState = function() {
  console.log('nextState');
  const x = this.joints[this.joints.length - 1].x;
  const y = this.joints[this.joints.length - 1].y;
  this.joints.unshift(this.joints.pop());
  switch (this.direction) {
    case 'up':
      this.joints[0].x = this.joints[1].x;
      this.joints[0].y = this.joints[1].y - 1;
      break;
    case 'down':
      this.joints[0].x = this.joints[1].x;
      this.joints[0].y = this.joints[1].y + 1;
      break;
    case 'left':
      this.joints[0].x = this.joints[1].x - 1;
      this.joints[0].y = this.joints[1].y
      break;
    case 'right':
      this.joints[0].x = this.joints[1].x + 1;
      this.joints[0].y = this.joints[1].y
      break;
  }
  if (this.fruit.x === this.joints[0].x && this.fruit.y === this.joints[0].y) {
    this.joints.push({ x, y });
    this.fruit.x = Math.floor(Math.random() * 20);
    this.fruit.y = Math.floor(Math.random() * 15);
  } else if (this.joints[0].x >= COLS || this.joints[0].x < 0) {
    return false;
  } else if (this.joints[0].y >= ROWS || this.joints[0].y < 0) {
    return false;
  } else if (this.joints.slice(1).some(item => item.x === this.joints[0].x && item.y === this.joints[0].y)) {
    return false;
  }
  return true;
}
export default SnakeGameLogic;