import { SocialIcon } from '@/based/config/SVGIcon';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const MenuHeader = [
    {
        id: 1,
        name: 'Home',
        link: '/',
    },
    {
        id: 2,
        name: 'Services',
        link: '/services',
    },
    {
        id: 3,
        name: 'Resume',
        link: '/resume',
    },
    // {
    //     id: 4,
    //     name: 'Projects',
    //     link: '/projects',
    // },
    // {
    //     id: 5,
    //     name: 'Contact',
    //     link: '/contact',
    // },
];

export const SocialMedia = [
    {
        id: 1,
        name: 'Github',
        link: 'https://github.com/henry-ndh',
        icon: <SocialIcon.Github width="14px" height="14px" />,
    },
    {
        id: 2,
        name: 'Linkedin',
        link: 'https://www.linkedin.com/in/nguyen-duc-hoang-1817082b6/',
        icon: <SocialIcon.Linkedin width="14px" height="14px" />,
    },
    {
        id: 3,
        name: 'Facebook',
        link: 'https://www.facebook.com/d8.ndh/',
        icon: <SocialIcon.Facebook width="14px" height="14px" />,
    },
];

export const ResumeData = {
    Experience: [
        {
            id: 3,
            time: '07/2024 - Present',
            title: 'Freelancer Developer',
            company: 'TN MALL',
            key: 'tnmall',
        },
        {
            id: 1,
            time: '05/2023- 06/2024',
            title: 'Full-stack Developer',
            company: 'Ranus-Tech Co., Ltd',
            key: 'ranus',
        },
        {
            id: 2,
            time: '03/2022- 06/2023',
            title: 'Front-end Developer',
            company: 'ISD Co., Ltd',
            key: 'isd',
        },
    ],
    AwardAndCertification: [
        {
            id: 1,
            title: 'Olympic Open Source 2023',
            time: '12/2023',
            company: 'VAIP Viet Nam',
            key: 'olympic',
            tag: 'award',
        },
        {
            id: 2,
            title: 'Software Solutions OU',
            time: '04/2023',
            company: 'HCM Open University',
            key: 'softwaresolutions',
            tag: 'award',
        },
        {
            id: 3,
            title: 'Web Design Contest 2022',
            time: '04/2023',
            company: 'Hacker',
            key: 'webdesign',
            tag: 'award',
        },
        {
            id: 4,
            title: 'Frontend Developer (React) Certificate',
            time: '08/2024',
            company: 'HackerRank',
            key: 'cer1',
            tag: 'certificate',
        },
        {
            id: 5,
            title: 'JavaScript (Intermediate) Certificate',
            time: '08/2024',
            company: 'HackerRank',
            key: 'cer2',
            tag: 'certificate',
        },
        {
            id: 6,
            title: 'React Certificate',
            time: '08/2024',
            company: 'HackerRank',
            key: 'cer3',
            tag: 'certificate',
        },
    ],
    Skills: [
        {
            id: 1,
            title: 'HTML',
            key: 'html',
        },
        {
            id: 2,
            title: 'CSS',
            key: 'css',
        },
        {
            id: 3,
            title: 'Javascript',
            key: 'javascript',
        },
        {
            id: 4,
            title: 'ReactJs',
            key: 'reactjs',
        },
        {
            id: 4,
            title: 'Typescript',
            key: 'reactjs',
        },
        {
            id: 6,
            title: 'TailwindCSS',
            key: 'tailwindcss',
        },
        {
            id: 7,
            title: 'Framer-motion',
            key: 'framermotion',
        },

        {
            id: 10,
            title: 'ASP.NET Core WebAPI',
            key: 'aspnetcore',
        },
        {
            id: 11,
            title: 'SQL Server',
            key: 'sqlserver',
        },
    ],
};

export const ExperienceDetail = {
    Ranus: () => {
        return (
            <motion.div initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="space-y-3 mt-4 text-start">
                <TitleResume>1. Giới thiệu</TitleResume>
                <ListUL>
                    <li>
                        - Ranus là một start-up công nghệ về thời trang may mặc được bắt đầu từ năm 2019, sở hữu các công nghệ độc quyền và khả năng vận hành tự động các quy trình sản xuất về thời
                        trang tới người dùng theo định hướng B2C.
                    </li>
                    <li>
                        - Hiện nay Ranus đang phát triển mạnh mẽ với đội ngũ nhân sự trẻ, Ranus đã cũng đã khẳng định được thương hiệu khi tham gia gọi vốn thành công tại Shark Tank Việt Nam và sự hợp
                        tác từ Beta Group.
                    </li>
                </ListUL>
                <TitleResume>2. Vị trí và thời gian làm việc</TitleResume>
                <ListUL>
                    <li>- Vị trí: Full-stack Developer</li>
                    <li>- Thời gian: 05/2023 - 06/2024</li>
                </ListUL>

                <TitleResume>3. Công nghệ sử dụng</TitleResume>
                <ListUL>
                    <li>- Front-end : HTML, SCSS, Javascripts, ReactJs, Redux Toolkit</li> <li>- Back-end: ASP.NET Core, SQL Server</li>
                </ListUL>

                <TitleResume>4. Quá trình làm việc</TitleResume>
                <ListUL>
                    <li>- Được đào tạo chuyên sâu và làm việc với Javascript, ReactJs và ASP.NET Core Web API.</li>
                    <li>- Hiểu và biết được quá trình xây dựng một dự án từ các bước đầu tiên tới khi đến tay người dùng.</li>
                    <li>- Chịu trách nhiệm phát triển dự án cộng đồng (Tapta.net). </li>
                    <li>- Tham gia phát triển hệ thống website Ranus.vn</li>
                </ListUL>
                <TitleResume>5. Kết quả đạt được</TitleResume>
                <ListUL>
                    <li>- Hoàn thành dự án cộng đồng tapta.net với vị trí full-stack developer, xây dựng thuật toán gợi ý bài tập cho người dùng</li>
                    <li>- Xây dựng website Ranus.vn với vị trí front-end developer. Xử lý giao diện để phù hợp với các thiết bị khác nhau </li>
                    <li>- Xây dựng, tối ưu hóa các component với hiệu suất và tính tái sử dụng cao cho toàn dự án</li>

                    <li>- Hiểu sâu về quá trình xây dựng 1 dự án từ lúc bắt đầu (thiết kế, lên ý tưởng,...) đến lúc đến tay người dùng (sản phẩm hoàn thiện). </li>
                </ListUL>
            </motion.div>
        );
    },
    ISD: () => {
        return (
            <motion.div initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="space-y-3 mt-4 text-start">
                <TitleResume>1. Giới thiệu</TitleResume>
                <ListUL>
                    <li>
                        - ISD là một công ty chuyên về lĩnh vực phát triển phần mềm, website, với đội ngũ nhân sự trẻ, năng động và chuyên nghiệp, ISD đã và đang phát triển mạnh mẽ trên thị trường
                        Việt Nam. Công ty phụ trách tiếp nhận xử lý các dự án từ các khách hàng trong và ngoài nước với các dự án lớn nhỏ khác nhau.
                    </li>
                    <li>- Công ty đã thực hiện khoảng 500 dự án khác nhau từ các khách hàng, và đã nhận được nhiều phản hồi tích cực từ phía khách hàng.</li>
                </ListUL>
                <TitleResume>2. Vị trí và thời gian làm việc</TitleResume>
                <ListUL>
                    <li>- Vị trí: Front-end Developer</li>
                    <li>- Thời gian: 02/2023 - 05/2023</li>
                </ListUL>
                <TitleResume>3. Quá trình làm việc</TitleResume>
                <ListUL>
                    <li>- Được đào về HTML, CSS, Javacsript, góc nhìn của 1 Front-end dev với 1 website</li>
                    <li>- Thiết kế các giao diện theo mẫu Figma được đưa ra</li>
                    <li>- Viết báo cáo đảm bảo tiến độ cho các module được giao</li>
                </ListUL>
                <TitleResume>4. Kết quả đạt được</TitleResume>
                <ListUL>
                    <li>- Có một góc nhìn tổng quan về việc lập trình giao diện Website, hiểu về bố cục, thiết kế của 1 trang web.</li>
                    <li>- Nâng cao khả năng làm việc nhóm, tương tác trong quá trình làm việc.</li>
                    <li>- Nâng cao khả năng lập trình với Javascript và ReactJs</li>
                </ListUL>
            </motion.div>
        );
    },
    TNMall: () => {
        return (
            <motion.div initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="space-y-3 mt-4 text-start">
                <TitleResume>1. Giới thiệu</TitleResume>
                <ListUL>
                    <li>
                        TN Mall là một dự án của một doanh nghiệp với mong muốn phát triển về mỹ phẩm. Dự án được bắt đầu từ năm 2024, với mục tiêu trở thành một trong những trang web cung cấp mỹ phẩm
                        tốt nhất cho người dùng.
                    </li>
                </ListUL>
                <TitleResume>2. Vị trí và thời gian làm việc</TitleResume>
                <ListUL>
                    <li>- Vị trí: Freelancer Front-end Developer</li>
                    <li>- Thời gian: 07/2024 - Present</li>
                </ListUL>

                <TitleResume>3. Công nghệ sử dụng</TitleResume>
                <ListUL>
                    <li>- Front-end : HTML,SCSS, Javascripts, ReactJs, ContextAPI</li> <li>- UI Frameworks: TailwindCSS, Shadcn UI, Framer-motion</li>
                </ListUL>

                <TitleResume>4. Nội dung làm việc</TitleResume>
                <ListUL>
                    <li>- Lên ý tưởng thiết kế 1 landing page với mục đích thu hút người dùng ở bản beta (trước khi ra mắt)</li>
                    <li>- Phối hợp với team back-end tại công ty để xử lý các API và viết các chức năng cho hệ thống</li>
                    <li>- Đảm bảo website được hoàn thiện tốt nhất khi đến tay người dùng</li>
                </ListUL>
                <TitleResume>5. Kết quả đạt được</TitleResume>
                <ListUL>
                    <li>
                        - Xây dựng thành công website cho công ty. Link website : <a className="underline-offset-0">https://customer.tnmall.com.vn/</a>
                    </li>
                    <li>- Nâng cao khả năng sử dụng animation</li>
                </ListUL>
            </motion.div>
        );
    },
};

export const AwardAndCertificationDetail = {
    OlympicOpenSource2023: () => {
        return (
            <motion.div initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="space-y-3 mt-4 text-start">
                <TitleResume>1. Thông tin cuộc thi</TitleResume>
                <ListUL>
                    <li>- Cuộc thi Olympic Open Source 2023 do Hội tin học Việt Nam (VAIP) tổ chức.</li>
                    <li>
                        - Là một sân chơi lớn nhằm tạo điều kiện cho sinh viên các trường đại học, cao đẳng trên cả nước trình bày và phát triển các giải pháp phần mềm dựa trên công nghệ nguồn mở.
                    </li>
                </ListUL>
                <TitleResume>2. Đề tài</TitleResume>
                <ListUL>
                    <li>- Đề tài của cuộc thi là Phát triển ứng dụng hỗ trợ tra cứu, hỏi đáp tri thức pháp luật dựa trên Bộ pháp điển và CSDL văn bản QPPL sử dụng mô hình ngôn ngữ lớn (LLM)</li>
                </ListUL>
                <TitleResume>3. Kết quả</TitleResume>
                <ListUL>
                    <li>- Tham gia là đại diện đến từ đại học Mở, đội thi của mình là CodeHeroes đã đạt giải Ba (3st place) trong cuộc thi.</li>
                    <li>
                        - Ứng dụng đạt hiệu quả cao trong việc truy cập thông tin pháp luật và giải quyết các vấn đề pháp lý. Nhận được nhiều lượt truy cập và khen ngợi từ ban tổ chức cũng như mọi
                        người.
                    </li>
                </ListUL>
                <TitleResume>4. Bonus</TitleResume>
                <ListUL>
                    <li>
                        - Link chi tiết hơn: <a className="underline-offset-0">https://tinyurl.com/423f3uvj</a>
                    </li>
                </ListUL>
            </motion.div>
        );
    },
    SoftwareSolutions: () => {
        return (
            <motion.div initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="space-y-3 mt-4 text-start">
                <TitleResume>1. Thông tin cuộc thi</TitleResume>
                <ListUL>
                    <li>- Cuộc thi do trường Đại học Mở Thành Phố Hồ Chí Minh tổ chức</li>
                    <li>- Là sân chơi dành cho toàn bộ sinh viên trường đại học Mở có đam mê với lĩnh vực công nghệ thông tin.</li>
                </ListUL>
                <TitleResume>2. Đề tài</TitleResume>
                <ListUL>
                    <li>- Sử dụng công nghệ để giải quyết 1 vấn đề xã hội do ban tổ chức đưa ra. Thí sinh sẽ có 24h để lập trình và chuẩn bị bài báo cáo</li>
                </ListUL>
                <TitleResume>3. Kết quả</TitleResume>
                <ListUL>
                    <li>- Đội của mình là CodeHeroes đã đạt giải Nhất (1st place) trong cuộc thi.</li>
                    <li>- Xây dựng được ứng dụng giải quyết vấn đề tài chính cho người dùng sử dụng AI.</li>
                </ListUL>
                <TitleResume>4. Bonus</TitleResume>
                <ListUL>
                    <li>
                        - Link chi tiết hơn: <a className="underline-offset-0">https://tinyurl.com/5cnh4chv</a>
                    </li>
                </ListUL>
            </motion.div>
        );
    },
    WebDesignContest: () => {
        return (
            <motion.div initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="space-y-3 mt-4 text-start">
                <TitleResume>1. Thông tin cuộc thi</TitleResume>
                <ListUL>
                    <li>- Cuộc thi do trường Đại học Mở Thành Phố Hồ Chí Minh tổ chức</li>
                    <li>- Là sân chơi dành cho sinh viên khoa công nghệ thông tin trường đại học Mở có đam mê với lĩnh vực công nghệ thông tin.</li>
                </ListUL>
                <TitleResume>2. Đề tài</TitleResume>
                <ListUL>
                    <li>- Cuộc thi bao gồm 2 vòng, vòng tuyển chọn và vòng thi chung kết</li>
                    <li>- Ở vòng tuyển chọn, đề thi là xây dựng template website giống với template mẫu từ ban tổ chức</li>
                    <li>- Ở vòng chung kết, đề thi là xây dựng một website hoàn thiện theo yêu cầu từ BTC</li>
                </ListUL>
                <TitleResume>3. Kết quả</TitleResume>
                <ListUL>
                    <li>- Đội thi của mình là CodeHeroes đã đạt giải Nhất (1st place) trong cuộc thi.</li>
                    <li>
                        - Đội mình đã xây dựng thành công website với giao diện đẹp, tương tác tốt với người dùng. Được đánh giá cao từ ban giám khảo và nhận được nhiều lời khen ngợi từ mọi người.
                    </li>
                </ListUL>
                <TitleResume>4. Bonus</TitleResume>
                <ListUL>
                    <li>
                        - Link chi tiết hơn: <a className="underline-offset-0">https://tinyurl.com/emkvjct3</a>
                    </li>
                </ListUL>
            </motion.div>
        );
    },
    Certificate1: () => {
        return (
            <motion.div initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="space-y-3 mt-4 text-start">
                <TitleResume>Chứng chỉ Frontend Developer (React) Certificate</TitleResume>
                <ListUL>
                    <li>- Được cấp bởi Hacker Rank.</li>
                    <li>- Link chi tiết: https://www.hackerrank.com/certificates/8487d70ef9ab</li>
                </ListUL>
            </motion.div>
        );
    },
    Certificate2: () => {
        return (
            <motion.div initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="space-y-3 mt-4 text-start">
                <TitleResume>Chứng chỉ JavaScript (Intermediate) Certificate</TitleResume>
                <ListUL>
                    <li>- Được cấp bởi Hacker Rank.</li>
                    <li>- Link chi tiết: https://www.hackerrank.com/certificates/820794132e8c</li>
                </ListUL>
            </motion.div>
        );
    },
    Certificate3: () => {
        return (
            <motion.div initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="space-y-3 mt-4 text-start">
                <TitleResume>Chứng chỉ React (Basic) Certificate</TitleResume>
                <ListUL>
                    <li>- Được cấp bởi Hacker Rank.</li>
                    <li>- Link chi tiết: https://www.hackerrank.com/certificates/00277968f6e6</li>
                </ListUL>
            </motion.div>
        );
    },
};

export const TitleResume = styled.h1`
    color: var(--color-text);
    font-weight: 600;
`;

export const ListUL = styled.ul`
    :not([hidden]) ~ :not([hidden]) {
        --tw-space-y-reverse: 0;
        margin-top: calc(0.25rem /* 4px */ * calc(1 - var(--tw-space-y-reverse)));
        margin-bottom: calc(0.25rem /* 4px */ * var(--tw-space-y-reverse));
    }
`;
