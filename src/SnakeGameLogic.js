import { ROWS, COLS } from './config';

function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열
  this.joints = [{ x: 1, y: 0 }, { x: 0, y: 0 }];

  // 먹이의 좌표
  this.fruit = { x: 5, y: 10 };
}

SnakeGameLogic.prototype.up = function() {
  up()
    // 위쪽 화살표 키를 누르면 실행되는
  console.log('up');
}
SnakeGameLogic.prototype.down = function() {
  down()
    // 위쪽 화살표 키를 누르면 실행되는
  console.log('down');
}
SnakeGameLogic.prototype.left = function() {
  left()
    // 위쪽 화살표 키를 누르면 실행되는
  console.log('left');
}
SnakeGameLogic.prototype.right = function() {
  right()
    // 위쪽 화살표 키를 누르면 실행되는
  console.log('right');
}

export default SnakeGameLogic;