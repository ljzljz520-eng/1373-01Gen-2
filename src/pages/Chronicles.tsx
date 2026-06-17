import { BookOpen, Library, BookMarked, Search, Copy, Phone, Info } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import SectionTitle from '@/components/SectionTitle';
import { chroniclesData, siteInfo } from '@/data/archiveData';

export default function Chronicles() {
  return (
    <div className="pt-20">
      <PageHeader
        title="地方志查阅指南"
        subtitle="地方志被誉为地方百科全书，记载着地方的历史、地理、风俗、人物等丰富内容。"
      />

      {/* Introduction & Stats */}
      <section className="section-py">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <SectionTitle title={chroniclesData.introduction.title} align="left" />
              <div className="prose prose-lg max-w-none">
                {chroniclesData.introduction.content
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
              {chroniclesData.collectionStats.map((item, index) => (
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
                      <BookOpen className="w-8 h-8 text-primary-700" />
                    )}
                    {index === 1 && (
                      <Library className="w-8 h-8 text-gold-700" />
                    )}
                    {index === 2 && (
                      <BookMarked className="w-8 h-8 text-cream-700" />
                    )}
                    {index === 3 && (
                      <Info className="w-8 h-8 text-ink-600" />
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

      {/* Collection Types */}
      <section className="section-py bg-cream-100">
        <div className="container">
          <SectionTitle
            title="馆藏种类"
            subtitle="我馆地方志馆藏丰富，涵盖以下主要类型。"
          />

          <div className="grid md:grid-cols-2 gap-6">
            {chroniclesData.collectionTypes.map((type, index) => (
              <div key={index} className="card p-8 flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary-100 to-gold-100 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-7 h-7 text-primary-700" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-ink-900 mb-3">
                    {type.title}
                  </h3>
                  <p className="text-ink-600 leading-relaxed">
                    {type.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Access Methods */}
      <section className="section-py">
        <div className="container">
          <SectionTitle
            title="查阅服务"
            subtitle="我们提供多种地方志查阅服务，满足不同的研究需求。"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {chroniclesData.accessMethods.map((method, index) => (
              <div
                key={index}
                className="card p-6 text-center group hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary-100 transition-colors">
                  {index === 0 && (
                    <BookOpen className="w-7 h-7 text-primary-700" />
                  )}
                  {index === 1 && (
                    <Search className="w-7 h-7 text-primary-700" />
                  )}
                  {index === 2 && (
                    <Copy className="w-7 h-7 text-primary-700" />
                  )}
                  {index === 3 && (
                    <Info className="w-7 h-7 text-primary-700" />
                  )}
                </div>
                <h3 className="font-serif text-lg font-bold text-ink-900 mb-3">
                  {method.title}
                </h3>
                <p className="text-ink-600 text-sm leading-relaxed">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="section-py bg-cream-100">
        <div className="container">
          <SectionTitle
            title="志书举要"
            subtitle="以下为我馆收藏的部分重要志书，更多馆藏请到馆查阅目录。"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chroniclesData.featuredBooks.map((book, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-card overflow-hidden group hover:shadow-card-hover transition-shadow"
              >
                <div className="h-40 bg-gradient-to-br from-primary-700 to-primary-800 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                  <div className="relative text-center">
                    <BookOpen className="w-12 h-12 text-gold-300 mx-auto mb-2" />
                    <p className="text-gold-200 text-sm">{book.era}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-ink-900 mb-2 group-hover:text-primary-700 transition-colors">
                    {book.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs px-2.5 py-1 bg-gold-100 text-gold-700 rounded-full font-medium">
                      {book.era}
                    </span>
                  </div>
                  <p className="text-ink-600 text-sm leading-relaxed">
                    {book.remark}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-ink-500 text-lg">
              更多志书目录请到馆查阅卡片目录或咨询工作人员
            </p>
          </div>
        </div>
      </section>

      {/* Reading Tips */}
      <section className="section-py">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary-50 to-gold-50 rounded-2xl p-8 md:p-12 border border-primary-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center">
                <Info className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-ink-900">
                  读者须知
                </h3>
                <p className="text-ink-600">地方志阅览注意事项</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary-700 font-bold text-sm">1</span>
                </div>
                <p className="text-ink-700 leading-relaxed">
                  持本人有效身份证件，在阅览室登记后方可查阅
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary-700 font-bold text-sm">2</span>
                </div>
                <p className="text-ink-700 leading-relaxed">
                  志书仅供室内阅览，一律不外借
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary-700 font-bold text-sm">3</span>
                </div>
                <p className="text-ink-700 leading-relaxed">
                  请爱护书籍，严禁批注、涂改、撕页
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary-700 font-bold text-sm">4</span>
                </div>
                <p className="text-ink-700 leading-relaxed">
                  珍贵善本需工作人员陪同查阅
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary-700 font-bold text-sm">5</span>
                </div>
                <p className="text-ink-700 leading-relaxed">
                  复印需经批准，按规定缴纳费用
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary-700 font-bold text-sm">6</span>
                </div>
                <p className="text-ink-700 leading-relaxed">
                  阅览室内请保持安静，将手机调至静音
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-800 to-primary-700">
        <div className="container text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            查阅地方志
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            如有查阅需求或疑问，欢迎拨打咨询电话，我们将为您提供专业的查阅指导。
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
