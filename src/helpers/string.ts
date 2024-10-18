export function truncateString(str: string | undefined | null, num: number) {
    if (typeof str !== 'string') {
      return '';
    }
    
    if (str.length <= num) {
      return str;
    }
    
    return str.slice(0, num) + '...';
  }