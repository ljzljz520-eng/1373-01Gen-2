import { Image, Camera, Search, Clock, Phone, AlertTriangle, Grid3X3 } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import SectionTitle from '@/components/SectionTitle';
import { photosData, siteInfo } from '@/data/archiveData';

export default function Photos() {
  return (
    <div className="pt-20">
      <PageHeader
        title="老照片馆藏查阅指南"
        subtitle="珍藏城市记忆，见证历史变迁。欢迎查阅我馆丰富的老照片馆藏资源。"
      />

      {/* Introduction & Stats */}
      <section className="section-py">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <SectionTitle title={photosData.introduction.title} align="left" />
              <div className="prose prose-lg max-w-none">
                {photosData.introduction.content
                  .split('\n\n')
                  .map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-lg text-ink-700 leading-relaxed mb-5 last:mb-0"
                    >
                      {paragraph}
                    </p>
                  ))}
              </div>
            </div>

            <div className="space-y-4">
              {photosData.overview.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-card p-6 flex items-center gap-5"
                >
                  <div
                    className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                      index === 0
                        ? 'bg-primary-100'
                        : index === 1
                        ? 'bg-gold-100'
                        : index === 2
                        ? 'bg-cream-200'
                        : 'bg-ink-100'
                    }`}
                  >
                    {index === 0 && (
                      <Image className="w-8 h-8 text-primary-700" />
                    )}
                    {index === 1 && (
                      <Clock className="w-8 h-8 text-gold-700" />
                    )}
                    {index === 2 && (
                      <Camera className="w-8 h-8 text-cream-700" />
                    )}
                    {index === 3 && (
                      <Grid3X3 className="w-8 h-8 text-ink-600" />
                    )}
                  </div>
                  <div>
                    <p className="font-serif text-3xl font-bold text-ink-900">
                      {item.value}
                      <span className="text-lg text-ink-500 ml-1 font-normal">
                        {item.unit}
                      </span>
                    </p>
                    <p className="text-ink-600">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-py bg-cream-100">
        <div className="container">
          <SectionTitle
            title="主题分类"
            subtitle="老照片按主题分为多个类别，方便您快速定位所需内容。"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {photosData.categories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 text-center shadow-sm hover:shadow-card hover:-translate-y-0.5 transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-gold-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:from-primary-200 group-hover:to-gold-200 transition-all">
                  <Image className="w-6 h-6 text-primary-600" />
                </div>
                <p className="font-medium text-ink-800">{category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Access Methods */}
      <section className="section-py">
        <div className="container">
          <SectionTitle
            title="查阅方式"
            subtitle="我们提供多种查阅方式，您可以根据需要选择最适合的方式。"
          />

          <div className="grid md:grid-cols-3 gap-6">
            {photosData.accessMethods.map((method, index) => (
              <div
                key={index}
                className="card p-8 border-t-4 border-primary-600"
              >
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6">
                  {index === 0 && <Image className="w-7 h-7 text-primary-700" />}
                  {index === 1 && <Search className="w-7 h-7 text-primary-700" />}
                  {index === 2 && <Clock className="w-7 h-7 text-primary-700" />}
                </div>
                <h3 className="font-serif text-xl font-bold text-ink-900 mb-4">
                  {method.title}
                </h3>
                <p className="text-ink-600 leading-relaxed">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Photos Preview */}
      <section className="section-py bg-cream-100">
        <div className="container">
          <SectionTitle
            title="照片精选"
            subtitle="以下为部分馆藏老照片示意，更多照片请到馆查阅。"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: '老城街景',
                era: '1930年代',
                desc: '繁华的老城商业街，记录着当时的市井风貌。',
                prompt: 'vintage street scene of old chinese city 1930s traditional architecture shops people sepia tone',
              },
              {
                title: '古老城门',
                era: '清代末年',
                desc: '气势恢宏的古城门，见证了城市的历史变迁。',
                prompt: 'ancient chinese city gate tower qing dynasty historical architecture stone walls',
              },
              {
                title: '民国风情',
                era: '1920年代',
                desc: '民国时期的城市风貌，中西合璧的建筑风格。',
                prompt: '1920s chinese city street republic of china era vintage photograph style',
              },
              {
                title: '老字号店铺',
                era: '1950年代',
                desc: '传承百年的老字号，承载着城市的商业记忆。',
                prompt: 'old chinese shop storefront 1950s vintage signboard traditional business',
              },
              {
                title: '运河风光',
                era: '1940年代',
                desc: '穿城而过的古运河，昔日繁忙的水上交通。',
                prompt: 'old chinese canal town boats traditional riverside buildings vintage photograph',
              },
              {
                title: '校园旧影',
                era: '1960年代',
                desc: '百年名校的历史影像，莘莘学子的青春记忆。',
                prompt: 'vintage chinese school campus 1960s students buildings black and white photo style',
              },
            ].map((photo, index) => (
              <div
                key={index}
                className="card group overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden bg-ink-100">
                  <img
                    src={`https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${photo.prompt}&image_size=landscape_4_3`}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 sepia-[30%]"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif text-lg font-bold text-ink-900">
                      {photo.title}
                    </h3>
                    <span className="text-sm text-primary-600 font-medium">
                      {photo.era}
                    </span>
                  </div>
                  <p className="text-ink-600 text-sm leading-relaxed">
                    {photo.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-ink-500 text-lg">
              以上为馆藏照片示意，更多珍贵老照片请到馆查阅
            </p>
          </div>
        </div>
      </section>

      {/* Usage Notice */}
      <section className="section-py">
        <div className="container">
          <SectionTitle
            title="使用须知"
            subtitle="为保护珍贵的历史照片，请在查阅时遵守以下规定。"
          />

          <div className="max-w-3xl mx-auto">
            <div className="bg-gold-50 border-2 border-gold-200 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gold-200 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-gold-700" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-ink-900">
                  查阅注意事项
                </h3>
              </div>
              <ul className="space-y-4">
                {photosData.usageNotice.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-gold-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-gold-700 font-bold text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-lg text-ink-700 leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-800 to-primary-700">
        <div className="container text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            预约查阅老照片
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            如需查阅珍贵的老照片资料，建议提前电话预约，我们将为您做好调档准备。
          </p>
          <a
            href={`tel:${siteInfo.phone}`}
            className="inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-primary-900 font-bold text-lg px-8 py-4 rounded-xl transition-colors"
          >
            <Phone className="w-6 h-6" />
            {siteInfo.phone}
          </a>
        </div>
      </section>
    </div>
  );
}
