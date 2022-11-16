import './top-particle.js';
import CoreComponent from './core-component.js';

class ModalFAQComponent extends CoreComponent {
    set toggle(show) {
        this._show = show;
        this.render();
    }

    _faqs = [
        {
            question: 'Apakah film gratis tersedia ?',
            answered: 'Tentu saja. Film yang terbaru akan tampil dalam daftar.',
        },
        {
            question: 'Bagaimana cara mencari film ?',
            answered: 'Gunakan kolom pencarian di bawah ini untuk mencari film, masukan judul film yang ingin anda cari.',
        },
        {
            question: 'Bagaimana cara menampilkan hasil lebih banyak ?',
            answered: 'Gunakan tombol "Load More" di bawah, jika film yang anda cari tidak ada di halaman pertama.',
        },
    ];

    render() {
        let faqsHtml = '';

        this._faqs.forEach((item) => {
            faqsHtml += `
                <div class="relative overflow-hidden">
                    <input type="checkbox" class="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer" />
                    <div class="h-12 w-full pl-5 flex items-center">
                        <h1>
                            ${item.question}
                        </h1>
                    </div>
                    <div class="absolute top-3 right-3 transition-transform duration-500 rotate-0 peer-checked:-rotate-90">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </div>
                    <div class="overflow-hidden bg-white transition-all duration-500 max-h-0 peer-checked:max-h-40">
                        <div class="p-5 border-t">${item.answered}</div>
                    </div>
                </div>
            `;
        });

        const html = `
        <div id="faqModal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-hidden overflow-x-hidden fixed top-0 right-0 left-0 z-50 p-4 w-full md:inset-0 h-modal md:h-full ${this._show ? 'show' : ''} mt-5 transition-all" style="display:${this._show ? 'block' : 'hidden'}">
            <div class="relative w-full max-w-2xl h-full md:h-auto m-auto">
                <div class="relative bg-white rounded-lg shadow isolate">
                    <top-particle-component></top-particle-component>
                    <div class="flex justify-between items-start p-4 rounded-t border-">
                        <h3 class="text-xl font-semibold text-gray-900">
                            Frequently Asked Questions
                        </h3>
                        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="faqModal" id="faqModalToggle">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div class="overflow-y-auto max-h-[85vh]">
                        <div class="overflow-hidden divide-y border shadow-sm rounded-2xl">
                            ${faqsHtml}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ${this._show ? (`
            <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity"></div>
        `) : ''}
        `;

        super.render(html);

        // Add functionality to the modalToggle
        this.querySelector('#faqModalToggle').addEventListener('click', () => {
            this._show = false;
            this.render();
        });
    }
}

customElements.define('modal-faq-component', ModalFAQComponent);
