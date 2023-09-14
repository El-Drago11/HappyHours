import OpenAI from 'openai';
import { OPENAI_Key } from './constant';

const openai = new OpenAI({
    apiKey:OPENAI_Key, // defaults to process.env["OPENAI_API_KEY"]
    dangerouslyAllowBrowser: true 
  });

export default openai;