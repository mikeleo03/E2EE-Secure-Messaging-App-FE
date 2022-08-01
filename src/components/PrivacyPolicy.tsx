import { Button, Radio, Form} from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {

  const navigate = useNavigate();
  const navigateToHome = () => {
    if (value != ''){
      navigate('/');
    }
  };
  
  const [value, setValue] = useState('');
  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <div className='flex justify-center xs:h-[76vh] lg:h-[50vh]'>
        <div className='bg-[#FFFFFF] w-[90vw] xs:h-[75vh] lg:h-[50vh] xs:top-5 lg:top-10 rounded-lg'>
          <div className='flex justify-center h-[45px]'>
            <h1 className='font-magilio text-subHeading pt-2'>Terms and Conditions</h1>
          </div>
          <div className='overflow-y-auto xs:h-[68vh] lg:h-[43vh] px-5'>
            <p className='font-alegreya text-body'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae iusto consectetur magni sapiente 
              eaque accusantium aliquam cumque! Minima, corrupti! Commodi magni aperiam facilis at sunt veritatis 
              ipsum possimus necessitatibus ut.Nemo, ad odio eveniet praesentium mollitia dolorem maxime, officiis 
              nam corrupti molestiae ratione minima facilis vitae dolorum. Officia pariatur quos eum repellendus, 
              ab est similique blanditiis ducimus doloremque reiciendis perspiciatis. Tenetur veritatis est enim, 
              ut cupiditate laboriosam, quas facilis placeat corporis eum voluptas dolore sapiente necessitatibus 
              exercitationem nisi laborum dicta dolores ducimus ex vel? Recusandae architecto ab itaque odio molestiae.
              Repellat, fuga. Accusamus corporis repellat, expedita dolore unde libero eius mollitia enim atque odio
              delectus sapiente quaerat quisquam eligendi corrupti esse natus, labore sit rerum id blanditiis similique 
              molestiae quia! Exercitationem deserunt totam cupiditate maiores, quod ipsa earum architecto qui, corrupti
              quidem harum voluptas perferendis impedit, tempora dolor minima rem illum animi facilis eligendi magnam?
              Voluptatem alias laudantium asperiores cupiditate! Error iste dolorum, eius a vel officiis assumenda 
              voluptatibus blanditiis consequuntur impedit distinctio inventore nobis debitis suscipit sapiente numquam 
              fuga vero voluptatem. Perspiciatis harum officiis repellat corrupti nobis praesentium illo?
              Vitae odio non, velit repellendus libero tenetur fugit commodi magni fuga cum, pariatur nulla quaerat 
              perspiciatis? Consequuntur, minima ducimus dignissimos ut deleniti laboriosam reiciendis quis ab ipsa illo
              corporis perferendis! Placeat sint a, omnis excepturi fugit saepe at sunt hic cum commodi magnam error 
              dignissimos expedita, quo aspernatur inventore magni animi maxime. Officiis nisi blanditiis dolorum. Nobis
              sequi odit quam. Magni, aut harum. Ut, natus? Fugit molestias vitae maiores deleniti reiciendis assumenda 
              fuga autem officia enim quaerat, voluptas repellendus tempore eligendi eaque nemo, expedita, eveniet cum 
              eos ab similique facere! Minima aut exercitationem necessitatibus ipsum voluptas aperiam sed expedita 
              totam quidem! Sit, rem eaque? Officia aliquam sed cupiditate adipisci optio, amet ipsa numquam ex 
              deserunt, expedita vel iste repellat iure. Maxime ipsam libero nesciunt labore saepe exercitationem ad. 
              Soluta repellendus dolor accusantium autem delectus, enim at voluptatibus repudiandae vitae totam, illo 
            </p>
          </div>
        </div>
      </div>
      <div className='relative h-[100px] z-40'>
        <Form>
          <Form.Item
            name="radio"
            rules={[{ required: true, message: 'You must agree to the Terms and Conditions to use the app.' }]}
            className='p-0 font-alegreyasans'
          >
            <Radio.Group onChange={onChange} value={value} className='h-5'>
              <Radio value={'checked'}>
                <p className='font-alegreyasans text-body text-white font-bold xs:pt-0 lg:pt-3'>
                  I have read and agree to these terms and conditions
                </p>
              </Radio>
            </Radio.Group>
          </Form.Item>
          <div className='flex justify-center h-auto'>
            <Button htmlType='submit' onClick={navigateToHome} 
              style={{background:'#FFA06E', borderRadius:'15px', borderColor:'#FFA06E'}}>
              <p className='font-alegreya text-body px-16 text-white'>
                Submit
              </p>
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
