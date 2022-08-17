/* eslint-disable react/no-unescaped-entities */
import { Button, Radio, Form } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    if (value != '') {
      navigate('/');
    }
  };

  const [value, setValue] = useState('');
  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <div className="flex justify-center xs:h-[50vh] lg:h-[50vh]">
        <div className="bg-[#FFFFFF] w-[90vw] xs:h-[50vh] lg:h-[50vh] xs:top-5 lg:top-10 rounded-lg">
          <div className="flex justify-center h-[45px]">
            <h1 className="font-magilio text-subHeading pt-2">
              Terms and Conditions
            </h1>
          </div>
          <div className="overflow-y-auto xs:h-[42vh] lg:h-[43vh] px-5">
            {/* <p className="font-alegreya text-body">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
              iusto consectetur magni sapiente eaque accusantium aliquam cumque!
              Minima, corrupti! Commodi magni aperiam facilis at sunt veritatis
              ipsum possimus necessitatibus ut.Nemo, ad odio eveniet praesentium
              mollitia dolorem maxime, officiis nam corrupti molestiae ratione
              minima facilis vitae dolorum. Officia pariatur quos eum
              repellendus, ab est similique blanditiis ducimus doloremque
              reiciendis perspiciatis. Tenetur veritatis est enim, ut cupiditate
              laboriosam, quas facilis placeat corporis eum voluptas dolore
              sapiente necessitatibus exercitationem nisi laborum dicta dolores
              ducimus ex vel? Recusandae architecto ab itaque odio molestiae.
              Repellat, fuga. Accusamus corporis repellat, expedita dolore unde
              libero eius mollitia enim atque odio delectus sapiente quaerat
              quisquam eligendi corrupti esse natus, labore sit rerum id
              blanditiis similique molestiae quia! Exercitationem deserunt totam
              cupiditate maiores, quod ipsa earum architecto qui, corrupti
              quidem harum voluptas perferendis impedit, tempora dolor minima
              rem illum animi facilis eligendi magnam? Voluptatem alias
              laudantium asperiores cupiditate! Error iste dolorum, eius a vel
              officiis assumenda voluptatibus blanditiis consequuntur impedit
              distinctio inventore nobis debitis suscipit sapiente numquam fuga
              vero voluptatem. Perspiciatis harum officiis repellat corrupti
              nobis praesentium illo? Vitae odio non, velit repellendus libero
              tenetur fugit commodi magni fuga cum, pariatur nulla quaerat
              perspiciatis? Consequuntur, minima ducimus dignissimos ut deleniti
              laboriosam reiciendis quis ab ipsa illo corporis perferendis!
              Placeat sint a, omnis excepturi fugit saepe at sunt hic cum
              commodi magnam error dignissimos expedita, quo aspernatur
              inventore magni animi maxime. Officiis nisi blanditiis dolorum.
              Nobis sequi odit quam. Magni, aut harum. Ut, natus? Fugit
              molestias vitae maiores deleniti reiciendis assumenda fuga autem
              officia enim quaerat, voluptas repellendus tempore eligendi eaque
              nemo, expedita, eveniet cum eos ab similique facere! Minima aut
              exercitationem necessitatibus ipsum voluptas aperiam sed expedita
              totam quidem! Sit, rem eaque? Officia aliquam sed cupiditate
              adipisci optio, amet ipsa numquam ex deserunt, expedita vel iste
              repellat iure. Maxime ipsam libero nesciunt labore saepe
              exercitationem ad. Soluta repellendus dolor accusantium autem
              delectus, enim at voluptatibus repudiandae vitae totam, illo
            </p> */}
            <h1>Privacy Policy for OSKM ITB</h1>

            <p>
              At Samitra, accessible from https://samitra.katitb22.com, one of
              our main priorities is the privacy of our visitors. This Privacy
              Policy document contains types of information that is collected
              and recorded by Samitra and how we use it.
            </p>

            <p>
              If you have additional questions or require more information about
              our Privacy Policy, do not hesitate to contact us.
            </p>

            <p>
              This Privacy Policy applies only to our online activities and is
              valid for visitors to our website with regards to the information
              that they shared and/or collect in Samitra. This policy is not
              applicable to any information collected offline or via channels
              other than this website. Our Privacy Policy was created with the
              help of the{' '}
              <a href="https://www.privacypolicygenerator.info/">
                Free Privacy Policy Generator
              </a>
              .
            </p>

            <h2>Consent</h2>

            <p>
              By using our website, you hereby consent to our Privacy Policy and
              agree to its terms.
            </p>

            <h2>Information we collect</h2>

            <p>
              The personal information that you are asked to provide, and the
              reasons why you are asked to provide it, will be made clear to you
              at the point we ask you to provide your personal information.
            </p>
            <p>
              If you contact us directly, we may receive additional information
              about you such as your name, email address, phone number, the
              contents of the message and/or attachments you may send us, and
              any other information you may choose to provide.
            </p>
            <p>
              When you register for an Account, we may ask for your contact
              information, including items such as name, company name, address,
              email address, and telephone number.
            </p>

            <h2>How we use your information</h2>

            <p>
              We use the information we collect in various ways, including to:
            </p>

            <ul>
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>
                Develop new products, services, features, and functionality
              </li>
              <li>
                Communicate with you, either directly or through one of our
                partners, including for customer service, to provide you with
                updates and other information relating to the website, and for
                marketing and promotional purposes
              </li>
              <li>Send you emails</li>
              <li>Find and prevent fraud</li>
            </ul>

            <h2>Log Files</h2>

            <p>
              Samitra follows a standard procedure of using log files. These
              files log visitors when they visit websites. All hosting companies
              do this and a part of hosting services' analytics. The information
              collected by log files include internet protocol (IP) addresses,
              browser type, Internet Service Provider (ISP), date and time
              stamp, referring/exit pages, and possibly the number of clicks.
              These are not linked to any information that is personally
              identifiable. The purpose of the information is for analyzing
              trends, administering the site, tracking users' movement on the
              website, and gathering demographic information.
            </p>

            <h2>Cookies and Web Beacons</h2>

            <p>
              Like any other website, Samitra uses 'cookies'. These cookies are
              used to store information including visitors' preferences, and the
              pages on the website that the visitor accessed or visited. The
              information is used to optimize the users' experience by
              customizing our web page content based on visitors' browser type
              and/or other information.
            </p>

            <h2>Advertising Partners Privacy Policies</h2>

            <p>
              You may consult this list to find the Privacy Policy for each of
              the advertising partners of Samitra.
            </p>

            <p>
              Third-party ad servers or ad networks uses technologies like
              cookies, JavaScript, or Web Beacons that are used in their
              respective advertisements and links that appear on Samitra, which
              are sent directly to users' browser. They automatically receive
              your IP address when this occurs. These technologies are used to
              measure the effectiveness of their advertising campaigns and/or to
              personalize the advertising content that you see on websites that
              you visit.
            </p>

            <p>
              Note that Samitra has no access to or control over these cookies
              that are used by third-party advertisers.
            </p>

            <h2>Third Party Privacy Policies</h2>

            <p>
              Samitra's Privacy Policy does not apply to other advertisers or
              websites. Thus, we are advising you to consult the respective
              Privacy Policies of these third-party ad servers for more detailed
              information. It may include their practices and instructions about
              how to opt-out of certain options.{' '}
            </p>

            <p>
              You can choose to disable cookies through your individual browser
              options. To know more detailed information about cookie management
              with specific web browsers, it can be found at the browsers'
              respective websites.
            </p>

            <h2>CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>

            <p>
              Under the CCPA, among other rights, California consumers have the
              right to:
            </p>
            <p>
              Request that a business that collects a consumer's personal data
              disclose the categories and specific pieces of personal data that
              a business has collected about consumers.
            </p>
            <p>
              Request that a business delete any personal data about the
              consumer that a business has collected.
            </p>
            <p>
              Request that a business that sells a consumer's personal data, not
              sell the consumer's personal data.
            </p>
            <p>
              If you make a request, we have one month to respond to you. If you
              would like to exercise any of these rights, please contact us.
            </p>

            <h2>GDPR Data Protection Rights</h2>

            <p>
              We would like to make sure you are fully aware of all of your data
              protection rights. Every user is entitled to the following:
            </p>
            <p>
              The right to access - You have the right to request copies of your
              personal data. We may charge you a small fee for this service.
            </p>
            <p>
              The right to rectification - You have the right to request that we
              correct any information you believe is inaccurate. You also have
              the right to request that we complete the information you believe
              is incomplete.
            </p>
            <p>
              The right to erasure - You have the right to request that we erase
              your personal data, under certain conditions.
            </p>
            <p>
              The right to restrict processing - You have the right to request
              that we restrict the processing of your personal data, under
              certain conditions.
            </p>
            <p>
              The right to object to processing - You have the right to object
              to our processing of your personal data, under certain conditions.
            </p>
            <p>
              The right to data portability - You have the right to request that
              we transfer the data that we have collected to another
              organization, or directly to you, under certain conditions.
            </p>
            <p>
              If you make a request, we have one month to respond to you. If you
              would like to exercise any of these rights, please contact us.
            </p>

            <h2>Children's Information</h2>

            <p>
              Another part of our priority is adding protection for children
              while using the internet. We encourage parents and guardians to
              observe, participate in, and/or monitor and guide their online
              activity.
            </p>

            <p>
              Samitra does not knowingly collect any Personal Identifiable
              Information from children under the age of 13. If you think that
              your child provided this kind of information on our website, we
              strongly encourage you to contact us immediately and we will do
              our best efforts to promptly remove such information from our
              records.
            </p>
          </div>
        </div>
      </div>
      <div className="relative xs:h-[125px] sm:h-[100px] lg:h-[80px] z-40">
        <Form>
          <Form.Item
            name="radio"
            rules={[
              {
                required: true,
                message:
                  'You must agree to the Terms and Conditions to use the app.',
              },
            ]}
            className="p-0 font-alegreyasans"
          >
            <Radio.Group
              onChange={onChange}
              value={value}
              className="xs:h-14 sm:h-10 lg:h-5"
            >
              <Radio value={'checked'}>
                <p className="font-alegreyasans text-body text-white font-bold xs:pt-3 lg:pt-3">
                  I have read and agree to these terms and conditions
                </p>
              </Radio>
            </Radio.Group>
          </Form.Item>
          <div className="flex justify-center h-auto">
            <Button
              htmlType="submit"
              onClick={navigateToHome}
              style={{
                background: '#FFA06E',
                borderRadius: '15px',
                borderColor: '#FFA06E',
              }}
            >
              <p className="font-alegreya text-body px-16 text-white">Submit</p>
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
