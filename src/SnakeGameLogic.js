import { ROWS, COLS } from './config';

function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열
  this.joints = [{ x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }];

  // 먹이의 좌표
  this.fruit = { x: 3, y: 5 };

}

SnakeGameLogic.prototype.up = function() {
  // 위쪽 화살표 키를 누르면 실행되는
  console.log('up');

}
SnakeGameLogic.prototype.down = function() {
  // 아래쪽 화살표 키를 누르면 실행되는
  console.log('down');


}
SnakeGameLogic.prototype.left = function() {
  // 왼쪽 화살표 키를 누르면 실행되는
  console.log('left');


}

SnakeGameLogic.prototype.right = function() {
  // 오른쪽 화살표 키를 누르면 실행되는
  console.log('right');


}


SnakeGameLogic.prototype.nextState = function() {
  console.log('nextState');
  return true;
}
export default SnakeGameLogic;