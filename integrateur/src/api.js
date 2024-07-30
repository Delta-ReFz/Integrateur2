export async function testApiConnection() {
    try {
      const response = await fetch(' https://50cf-144-172-214-11.ngrok-free.app/');
      if (response.ok) {
        console.log('API connection successful');
        return true;
      } else {
        console.error('API connection failed');
        return false;
      }
    } catch (error) {
      console.error('API connection error:', error);
      return false;
    }
  }