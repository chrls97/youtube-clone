export const API_KEY = 'AIzaSyCgR79-6k32v4FNgxZ8Bgm_ehha1m-J5fE';

export const value_converter = (value) => {
  if(value >= 1000000) {
    return (value / 1000000).toFixed(1) + 'M';
  } else if(value >= 1000) {
    return (value / 1000).toFixed(1) + 'K';
  } else {
    return value;
  }
}
