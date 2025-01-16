import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';

export default function FooterSection({ title, links, setContactOpen=null, setAboutOpen=null}) {
  const baseClass = "text-base text-gray-200 font-medium hover:text-primary-200 transition-colors duration-200";
  return (
    <div>
      <h3 className="text-sm font-bold text-white tracking-wider uppercase">
        {title}
      </h3>
      <motion.ul
        className="mt-4 space-y-4"
        initial="hidden"
        whileInView="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {links.map((link) => (
          <motion.li
            key={link.label}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.4 }}
          >
           {link.type === 'action' ? <button onClick={link.actionKey === 'openContact' ? setContactOpen : setAboutOpen} className={baseClass}>{link.label}</button> : <Link
              href={link.href}
              className={baseClass}
            >
              {link.label}
            </Link>}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}