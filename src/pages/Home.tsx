import { Link } from 'react-router-dom';
import {
  AlertTriangle,
  Clock,
  Phone,
  Monitor,
  MapPin,
  ChevronRight,
  Building2,
  CalendarDays,
  FileText,
  Sparkles,
} from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import ArchiveCard from '@/components/ArchiveCard';
import {
  archiveCategories,
  visitingNotice,
  openingHours,
  appointmentMethods,
  siteInfo,
} from '@/data/archiveData';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[620px] flex items-center pt-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'linear-gradient(135deg, rgba(139, 35, 35, 0.92) 0%, rgba(117, 30, 30, 0.88) 50%, rgba(94, 24, 24, 0.92) 100%), url("https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=historic%20chinese%20government%20archives%20building%20with%20traditional%20architecture%20grand%20entrance%20stone%20steps&image_size=landscape_16_9")',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cream-100/20"></div>

        <div className="container relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-400/40 px-5 py-2 rounded-full mb-8">
              <Sparkles className="w-5 h-5 text-gold-300" />
              <span className="text-gold-200 text-lg font-medium">
                国家一级档案馆
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              保存城市记忆
              <br />
              <span className="text-gold-400">传承历史文明</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/85 mb-10 leading-relaxed">
              城市档案馆是本市重要的档案保管基地和爱国主义教育基地，
              <br className="hidden md:block" />
              馆藏丰富，门类齐全，为社会各界提供优质的档案查阅利用服务。
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/household" className="btn-primary text-lg px-8 py-4">
                档案查询指南
              </Link>
              <a
                href={`tel:${siteInfo.phone}`}
                className="btn-outline text-lg px-8 py-4 !border-gold-400 !text-gold-300 hover:!bg-gold-400/10"
              >
                <Phone className="w-5 h-5 mr-2" />
                咨询电话
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              <div className="text-center">
                <p className="font-serif text-4xl md:text-5xl font-bold text-gold-400 mb-2">
                  200万+
                </p>
                <p className="text-white/70 text-lg">馆藏档案</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-4xl md:text-5xl font-bold text-gold-400 mb-2">
                  70年
                </p>
                <p className="text-white/70 text-lg">建馆历史</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-4xl md:text-5xl font-bold text-gold-400 mb-2">
                  20+
                </p>
                <p className="text-white/70 text-lg">档案门类</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-4xl md:text-5xl font-bold text-gold-400 mb-2">
                  10万+
                </p>
                <p className="text-white/70 text-lg">年查阅量</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-cream-100 to-transparent"></div>
      </section>

      {/* Visiting Notice Section */}
      <section className="section-py bg-cream-100">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-2">
              <SectionTitle title="查档须知" align="left" />
              <p className="text-lg text-ink-600 leading-relaxed mb-6">
                为了您能够顺利查阅档案，请在来馆前仔细阅读以下注意事项，提前准备好相关材料。
              </p>
              <div className="bg-primary-50 border-l-4 border-primary-600 p-5 rounded-r-lg">
                <p className="text-primary-800 font-medium text-lg">
                  温馨提示：建议提前预约，避免高峰期等待
                </p>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-card p-8">
                <ul className="space-y-5">
                  {visitingNotice.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-4 pb-5 border-b border-cream-200 last:border-b-0 last:pb-0"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center">
                        <AlertTriangle className="w-5 h-5 text-gold-600" />
                      </div>
                      <p className="text-lg text-ink-700 leading-relaxed pt-0.5">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Opening Hours Section */}
      <section className="section-py">
        <div className="container">
          <SectionTitle
            title="开放时间"
            subtitle="请在开放时间内来馆查阅，法定节假日闭馆。周五下午为内部整理时间，提前停止对外服务。"
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <CalendarDays className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-ink-900 mb-3">
                {openingHours.weekday}
              </h3>
              <p className="text-lg text-ink-600 leading-relaxed whitespace-pre-line">
                {openingHours.weekdayTime}
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-gold-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-gold-600" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-ink-900 mb-3">
                {openingHours.weekend}
              </h3>
              <p className="text-lg text-ink-600 leading-relaxed whitespace-pre-line">
                {openingHours.weekendTime}
              </p>
            </div>

            <div className="card p-8 text-center bg-ink-50 border-2 border-ink-100">
              <div className="w-16 h-16 bg-ink-200 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-8 h-8 text-ink-600" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-ink-900 mb-3">
                闭馆日
              </h3>
              <p className="text-lg text-ink-600 leading-relaxed">
                {openingHours.closed}
              </p>
            </div>
          </div>

          <div className="mt-10 bg-gold-50 border-2 border-gold-200 rounded-xl p-6 max-w-5xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gold-200 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-gold-700" />
              </div>
              <div>
                <p className="font-semibold text-ink-800 text-lg mb-1">特别说明</p>
                <p className="text-ink-600 text-base">{openingHours.note}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Archive Categories Section */}
      <section className="section-py bg-cream-100">
        <div className="container">
          <SectionTitle
            title="馆藏门类"
            subtitle="我馆馆藏丰富，门类齐全。以下为主要查询服务门类，点击查看详细查询指南。"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {archiveCategories.map((category) => (
              <ArchiveCard
                key={category.id}
                id={category.id}
                title={category.title}
                description={category.description}
                icon={category.icon}
                route={category.route}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-ink-600 text-lg mb-4">
              如需查阅其他门类档案，请电话咨询或现场询问
            </p>
            <a
              href={`tel:${siteInfo.phone}`}
              className="inline-flex items-center text-primary-700 hover:text-primary-800 font-medium text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              {siteInfo.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Appointment Methods Section */}
      <section className="section-py">
        <div className="container">
          <SectionTitle
            title="预约方式"
            subtitle="为减少您的等待时间，建议提前预约。我们提供多种预约方式供您选择。"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {appointmentMethods.map((method) => (
              <div
                key={method.id}
                className="card p-8 text-center group hover:-translate-y-1"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-gold-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-primary-200 group-hover:to-gold-200 transition-all">
                  {method.icon === 'Phone' && (
                    <Phone className="w-10 h-10 text-primary-700" />
                  )}
                  {method.icon === 'Monitor' && (
                    <Monitor className="w-10 h-10 text-primary-700" />
                  )}
                  {method.icon === 'MapPin' && (
                    <MapPin className="w-10 h-10 text-primary-700" />
                  )}
                </div>
                <h3 className="font-serif text-2xl font-bold text-ink-900 mb-3">
                  {method.title}
                </h3>
                <p className="text-ink-600 leading-relaxed mb-5">
                  {method.description}
                </p>
                <div className="pt-5 border-t border-cream-200">
                  {'phone' in method && (
                    <a
                      href={`tel:${method.phone}`}
                      className="inline-flex items-center text-primary-700 hover:text-primary-800 font-semibold text-lg"
                    >
                      {method.phone}
                      <ChevronRight className="w-5 h-5 ml-1" />
                    </a>
                  )}
                  {'url' in method && (
                    <a
                      href={method.url}
                      className="inline-flex items-center text-primary-700 hover:text-primary-800 font-semibold text-lg"
                    >
                      在线预约
                      <ChevronRight className="w-5 h-5 ml-1" />
                    </a>
                  )}
                  {'address' in method && (
                    <p className="text-ink-700 font-medium text-lg">
                      {method.address}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
