import { getPercent, randomHeightPipe } from '../util';

export const SCREEN_WIDTH = 400;
export const SCREEN_HEIGHT = 600;

export const BIRD_PERCENT = 8;
export const PIPE_WIDTH_PERCENT = 20;
// make sure the total height of two pipes is 75%
export const MAX_PIPE_HEIGHT_PERCENT = 75;
export const LINE_PERCENT = 0.5;

export const GRAVITY = 0.05;

export const SCREEN_WIDTH_HALF = SCREEN_WIDTH / 2;
export const SCREEN_HEIGHT_HALF = SCREEN_HEIGHT / 2;

export const BIRD_WIDTH = getPercent((SCREEN_WIDTH + SCREEN_HEIGHT) / 2, BIRD_PERCENT);
export const BIRD_HEIGHT = getPercent((SCREEN_WIDTH + SCREEN_HEIGHT) / 2, BIRD_PERCENT);

export const BIRD_WIDTH_HALF = BIRD_WIDTH / 2;
export const BIRD_HEIGHT_HALF = BIRD_HEIGHT / 2;

export const BIRD_CENTER_X = SCREEN_WIDTH_HALF - BIRD_WIDTH_HALF;
export const BIRD_CENTER_Y = SCREEN_HEIGHT_HALF - BIRD_HEIGHT_HALF;

export const PIPE_WIDTH = getPercent(SCREEN_WIDTH, PIPE_WIDTH_PERCENT);
export const PIPE_WIDTH_HALF = PIPE_WIDTH / 2;
export const { upHeight: PIPE_UP_HEIGHT, downHeight: PIPE_DOWN_HEIGHT } = randomHeightPipe(
  SCREEN_HEIGHT,
  MAX_PIPE_HEIGHT_PERCENT
);
export const PIPE_CENTER_X = SCREEN_WIDTH_HALF - PIPE_WIDTH_HALF;

export const LINE_WIDTH = getPercent(SCREEN_WIDTH, LINE_PERCENT);
export const LINE_WIDTH_HALF = LINE_WIDTH / 2;

export const REDUCER_TYPE = {
  BIRD_DOWN: 'bird-down',
  BIRD_STOP: 'bird-stop',
  BIRD_JUMP: 'bird-jump',
  SCORE: 'score',
  RUN: 'run',
  PAUSE: 'pause',
  GAMEOVER: 'gameover',
};

export const STYLES = {
  SCREEN: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    backgroundColor: '#f9dcbc',
    margin: '0 auto',
    position: 'relative',
    overflow: 'hidden',
  },
  BIRD: {
    width: BIRD_WIDTH,
    height: BIRD_HEIGHT,
    backgroundColor: 'red',
    position: 'absolute',
    zIndex: 1,
  },
  PIPE_UP: {
    width: PIPE_WIDTH,
    backgroundColor: '#35d59c',
    position: 'absolute',
    top: 0,
  },
  PIPE_DOWN: {
    width: PIPE_WIDTH,
    backgroundColor: '#35d59c',
    position: 'absolute',
    bottom: 0,
  },
  SCORE: {
    fontSize: 60,
    userSelect: 'none',
    position: 'absolute',
    transform: `translate(${BIRD_CENTER_X}px, ${50}px)`,
    zIndex: 1,
  },
  LINE: {
    width: LINE_WIDTH,
    position: 'absolute',
  },
};